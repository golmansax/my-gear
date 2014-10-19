require 'rails_helper'

describe ClothingItem do
  describe 'associations' do
    it { is_expected.to have_and_belong_to_many(:outfits) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:brand) }
    it { is_expected.to validate_presence_of(:model) }
    it { is_expected.to validate_presence_of(:first_purchase_date) }
    it { is_expected.to validate_presence_of(:recent_purchase_date) }
  end
end
