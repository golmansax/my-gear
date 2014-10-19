class Outfit < ActiveRecord::Base
  has_and_belongs_to_many :clothing_items

  validates_presence_of :name
end
