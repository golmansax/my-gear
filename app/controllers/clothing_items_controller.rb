class ClothingItemsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        @clothing_items = ClothingItem.all.includes(:purchases, :outfits)
      end
      format.html { render template: 'pages/index' }
    end
  end
end
