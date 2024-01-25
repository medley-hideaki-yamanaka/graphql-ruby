require "test_helper"

class PostControllerTest < ActionDispatch::IntegrationTest
  test "should get indexx" do
    get post_indexx_url
    assert_response :success
  end
end
