class OutfitsController < ApplicationController
  def index
    @outfits = Outfit.all
    respond_to { |format| format.json }
  end

  def show
    @outfit = Outfit.friendly.find(params[:id])
    respond_to do |format|
      format.json
      format.html { render template: 'pages/index' }
    end
  end
end
