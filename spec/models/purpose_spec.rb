# frozen_string_literal: true
require 'rails_helper'

describe Purpose do
  describe 'associations' do
    it { is_expected.to have_and_belong_to_many(:purchases) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end
end
