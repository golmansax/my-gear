class OutfitsController < ApplicationController
  respond_to :json

  def index
    @outfits = Outfit.all.includes(:clothing_items)
  end
end
