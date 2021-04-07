class Link < ApplicationRecord
  validates :original_url, presence: true, length: { maximum: 200 }
end