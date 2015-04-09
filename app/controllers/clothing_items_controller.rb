class ClothingItemsController < ApplicationController
  respond_to :json

  def index
    @clothing_items = ClothingItem.all.includes(:purchases, :purposes)
  end
end
