require 'rails_helper'

describe PagesController do
  describe '#index' do
    it 'has an ok status' do
      get(:index)
      expect(response.status).to eq(200)
    end
  end
end
