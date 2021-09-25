from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class TestMainPage:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')

    def test_main_page_renders(self):
        expected_id = 'main-page'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_nav_drawer_renders(self):
        expected_id = 'nav-drawer'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_new_email_button_renders(self):
        expected_id = "new-email-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_pressing_the_c_key_opens_a_new_email(self):
        self.driver.find_element_by_id('main-page').send_keys('c')
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_pressing_c_does_nothing_if_email_card_is_already_open(self):
        self.driver.find_element_by_id('main-page').send_keys('cc')
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_table_renders(self):
        expected_id = "email-table"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def teardown_method(self):
        self.driver.quit()
