class OutfitsController < ApplicationController
  def index
    @outfits = Outfit.all.includes(:clothing_items)
    respond_to { |format| format.json }
  end
end
