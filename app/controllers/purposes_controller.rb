class PurposesController < ApplicationController
  respond_to :json

  def index
    @purposes = Purpose.all.includes(:clothing_items)
  end
end
