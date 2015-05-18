class Brand < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :clothing_items
  has_many :purchases, through: :clothing_items

  validates :name, presence: true
end
