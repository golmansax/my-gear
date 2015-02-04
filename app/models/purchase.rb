class Purchase < ActiveRecord::Base
  belongs_to :clothing_item

  validates_presence_of :date
  validates_presence_of :in_use
  validates_presence_of :version
end
