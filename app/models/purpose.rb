# frozen_string_literal: true
class Purpose < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_and_belongs_to_many :purchases

  validates :name, presence: true
end
