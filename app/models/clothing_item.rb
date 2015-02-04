class ClothingItem < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :outfits
  has_many :purchases

  validates_presence_of :brand
  validates_presence_of :model
  validates_presence_of :purchases

  def name
    "#{brand} #{model}"
  end
end
