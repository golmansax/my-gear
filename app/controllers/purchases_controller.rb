class PurchasesController < ApplicationController
  respond_to :json

  def index
    @purchases = Purchase.all.includes(:purposes, :clothing_item)
  end
end
