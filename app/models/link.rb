class Link < ApplicationRecord
  validates :original_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https]), 
            length: { minimum: 3, maximum: 255 }
  validates :shortened_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https])
  validates :slug, presence: true
end