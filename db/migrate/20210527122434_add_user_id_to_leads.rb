class AddUserIdToLeads < ActiveRecord::Migration[6.1]
  def change
    add_column :leads, :user_id, :integer
  end
end
