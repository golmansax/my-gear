class PurchasesController < ApplicationController
  respond_to :json

  def index
    @purchases = Purchase.all.includes(:clothing_item)
  end
end
