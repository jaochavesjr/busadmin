require "test_helper"

class TravelsControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get travels_list_url
    assert_response :success
  end

  test "should get create" do
    get travels_create_url
    assert_response :success
  end

  test "should get update" do
    get travels_update_url
    assert_response :success
  end
end
