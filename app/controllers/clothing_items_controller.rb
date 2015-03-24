class ClothingItemsController < ApplicationController
  def index
    respond_to do |format|
      format.json { @clothing_items = ClothingItem.all }
      format.html { render template: 'pages/index' }
    end
  end

  def show
    respond_to do |format|
      format.json { @clothing_item = ClothingItem.friendly.find(params[:id]) }
      format.html { render template: 'pages/index' }
    end
  end
end
