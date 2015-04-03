class Purchase < ActiveRecord::Base
  belongs_to :clothing_item

  validates :date, presence: true
  validates :version, presence: true

  enum usage: ['not in use', :specialized, :backup, :everyday, :wishlist]
end
