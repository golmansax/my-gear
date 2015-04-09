require 'rails_helper'

describe ClothingItem do
  describe 'associations' do
    it { is_expected.to have_and_belong_to_many(:purposes) }
    it { is_expected.to have_many(:purchases) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:brand) }
    it { is_expected.to validate_presence_of(:model) }
  end
end
