class ClothingItem < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :outfits

  validates_presence_of :brand
  validates_presence_of :model
  validates_presence_of :first_purchase_date
  validates_presence_of :recent_purchase_date

  def name
    "#{brand} #{model}"
  end
end
