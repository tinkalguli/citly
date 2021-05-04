require("test_helper")

class LinkTest < ActiveSupport::TestCase
  def setup
    Link.delete_all

    @link = Link.new(original_url: 'https://google.com',
                    shortened_url: 'http://localhost:3000/12345',
                    slug: '12345')
  end

  def test_instance_of_link
    assert_instance_of Link, @link
  end

  def test_value_of_original_url_assigned
    assert_equal "https://google.com", @link.original_url
  end

  def test_value_created_at
    assert_nil @link.created_at
  
    @link.save!
    assert_not_nil @link.created_at
  end

  test "error raised" do
    assert_raises ActiveRecord::RecordNotFound do
      Link.find(SecureRandom.uuid)
    end
  end
  
  def test_count_of_number_of_links
    assert_difference ['Link.count'], 2 do
      Link.create!(original_url: 'https://google.com',
                  shortened_url: 'http://localhost:3000/1234a',
                  slug: '1234a')
      Link.create!(original_url: 'https://facebook.com',
                  shortened_url: 'http://localhost:3000/1234b',
                  slug: '1234b')
    end
  end

  def test_link_should_not_be_valid_without_original_link
    @link.original_url = ''
    assert @link.invalid?
  end

  def test_link_should_not_be_valid_without_shortened_link
    @link.shortened_url = ''
    assert @link.invalid?
  end

  def test_link_should_not_be_valid_without_slug
    @link.slug = ''
    assert @link.invalid?
  end

  def test_error_raised_for_duplicate_slug
    test_link = Link.create!(original_url: 'https://twitter.com',
                             shortened_url: 'http://localhost:3000/1234a',
                             slug: '1234a')
    
    slug = test_link.slug

    assert_raises ActiveRecord::RecordInvalid do
      another_test_link = Link.create!(original_url: 'https://facebook.com',
                                       shortened_url: "http://localhost:3000/#{slug}",
                                       slug: slug)
    end
  end

  def test_slug_to_be_reused_after_getting_deleted
    test_link = Link.create!(original_url: 'https://twitter.com',
                             shortened_url: 'http://localhost:3000/1234c',
                             slug: '1234c')
  
    test_link_slug = test_link.slug
    test_link.destroy
  
    assert_nothing_raised do
      Link.create!(original_url: 'https://facebook.com',
                   shortened_url: "http://localhost:3000/#{test_link_slug}",
                   slug: test_link_slug)
    end
  end

  def test_validation_should_accept_valid_original_urls
    valid_urls = %w[https://example.com http://example.COM 
                    https://US-ER.example.org http://first.example.in?a=4]
  
    valid_urls.each do |url|
      @link.original_url = url
      assert @link.valid?
    end
  end

  def test_validation_should_accept_valid_shortened_urls
    valid_urls = %w[https://example.com/1234a http://example.COM/3452s 
                    https://US-ER.example.org/4567g http://example.in/6789g]
  
    valid_urls.each do |url|
      @link.shortened_url = url
      assert @link.valid?
    end
  end

  def test_validation_should_reject_invalid_original_urls
    invalid_urls = %w[example,com link_at_example.org link.example  
                      htt://sam-sam.com sam+exam.com fishy+#.com]
  
    invalid_urls.each do |url|
      @link.original_url = url
      assert @link.invalid?
    end
  end

  def test_validation_should_reject_invalid_shortened_urls
    invalid_urls = %w[example,com/3456s link_at_example.org/4567g   
                      htt://sam-sam.com/ec34 sam+exam.com/6789d]
  
    invalid_urls.each do |url|
      @link.shortened_url = url
      assert @link.invalid?
    end
  end
end