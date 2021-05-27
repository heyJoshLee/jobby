class CreateTouches < ActiveRecord::Migration[6.1]
  def change
    create_table :touches do |t|
      t.string :title, :body, :status
      t.date :date
      t.integer :lead_id
      t.timestamps
    end
  end
end
