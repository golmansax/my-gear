class ClothingItem < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :purchases

  validates :brand, presence: true
  validates :model, presence: true
  validates :purchases, presence: true

  def name
    "#{brand} #{model}"
  end
end
