class Purchase < ActiveRecord::Base
  belongs_to :clothing_item

  has_and_belongs_to_many :purposes

  validates :date, presence: true
  validates :version, presence: true

  enum usage: ['not in use', :specialized, :backup, :everyday, :wishlist]
end
