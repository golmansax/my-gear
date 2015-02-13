class Outfit < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :clothing_items
  has_many :clothing_items_outfits

  validates :name, presence: true
end
