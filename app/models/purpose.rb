class Purpose < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :clothing_items
  has_many :purchases, through: :clothing_items

  validates :name, presence: true
end
