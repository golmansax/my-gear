class ClothingItemsController < ApplicationController
  def index
    @clothing_items = ClothingItem.all
    respond_to { |format| format.json }
  end
end
