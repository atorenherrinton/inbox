from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class TestEmailTable:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')

    def test_table_header_renders(self):
        expected_id = 'table-header'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def teardown_method(self):
        self.driver.quit()
