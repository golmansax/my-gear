class Outfit < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :clothing_items, through: :clothing_items_outfits

  validates :name, presence: true
end
