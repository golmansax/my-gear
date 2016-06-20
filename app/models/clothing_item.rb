# frozen_string_literal: true
class ClothingItem < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :purchases
  belongs_to :brand

  validates :brand, presence: true
  validates :model, presence: true

  def name
    "#{brand.name} #{model}"
  end
end
