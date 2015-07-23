require 'rails_helper'

describe ClothingItem do
  describe 'associations' do
    it { is_expected.to have_many(:purchases) }
  end

  describe 'validations' do
    subject { build(:clothing_item) }

    it { is_expected.to validate_presence_of(:model) }
  end

  it 'throws an error if a clothing item is saved without a brand' do
    expect do
      create(:clothing_item, brand: nil)
    end.to raise_error(NoMethodError)
  end
end
