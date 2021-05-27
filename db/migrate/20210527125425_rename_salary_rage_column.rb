class RenameSalaryRageColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :leads, :salary_rage, :salary_range

  end
end
