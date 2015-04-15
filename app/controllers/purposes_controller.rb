class PurposesController < ApplicationController
  respond_to :json

  def index
    @purposes = Purpose.all.includes(:purchases)
  end
end
