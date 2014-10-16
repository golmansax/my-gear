class ClothingItem < ActiveRecord::Base
  validates_presence_of :brand
  validates_presence_of :model
  validates_presence_of :first_purchase_date
  validates_presence_of :recent_purchase_date
end
