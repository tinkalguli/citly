class Link < ApplicationRecord
  validates :original_url, presence: true, length: { minimum: 3, maximum: 255 }
  validates :shortened_url, presence: true
  validates :slug, presence: true
end