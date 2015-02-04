class Purchase < ActiveRecord::Base
  belongs_to :clothing_item

  validates_presence_of :date
  validates_presence_of :version

  enum usage: ['not in use', :specialized, :moderate, :heavy]
end
