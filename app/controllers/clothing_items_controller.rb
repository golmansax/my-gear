class ClothingItemsController < ApplicationController
  def index
    @clothing_items = ClothingItem.all
    respond_to { |format| format.json }
  end

  def show
    @clothing_item = ClothingItem.friendly.find(params[:id])
    respond_to { |format|
      format.json
      format.html { render template: 'pages/index' }
    }
  end
end
