from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class TestApp:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(5)
        self.driver.get('http://localhost:3000/')

    def test_app_renders(self):
        expected_id = 'app'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_nav_bar_renders(self):
        expected_id = 'nav-bar'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def teardown_method(self):
        self.driver.quit()
