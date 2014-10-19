class OutfitsController < ApplicationController
  def index
    @outfits = Outfit.all
    respond_to { |format| format.json }
  end

  def show
    @outfit = Outfit.find(params[:id])
    respond_to { |format| format.json }
  end
end
