from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class TestEmailList:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')
        self.driver.find_element_by_id('new-email-button').click()

    def test_email_list_is_empty_at_start(self):
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} not to be present, but more than 0 were displayed'

    def test_email_list_has_one_email_chip_after_email_entered_and_tab_key_pressed(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(f'test@test.com{Keys.TAB}')
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_list_has_zero_email_chips_after_delete_button_pressed_on_chip(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(f'test@test.com{Keys.TAB}')
        self.driver.find_element_by_class_name("MuiChip-deleteIcon").click()
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id}, but could not find that id'

    def teardown_method(self):
        self.driver.quit()
