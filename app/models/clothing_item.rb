class ClothingItem < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :outfits

  validates_presence_of :brand
  validates_presence_of :model

  enum usage: [:specialized, :moderate, :heavy]

  def name
    "#{brand} #{model}"
  end
end
