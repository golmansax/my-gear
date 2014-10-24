class Outfit < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :clothing_items

  validates_presence_of :name
end
