class BrandsController < ApplicationController
  respond_to :json

  def index
    @brands = Brand.all.includes(:purchases)
  end
end
