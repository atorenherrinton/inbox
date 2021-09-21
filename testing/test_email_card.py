from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import time


class TestEmailCard:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')
        self.driver.find_element_by_id('new-email-button').click()

    def test_email_header_is_rendered(self):
        expected_id = "email-header"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_new_email_text_is_rendered_inside_email_header(self):
        expected_id = "new-email"
        result = self.driver.find_element_by_id(expected_id).text
        text = 'New Email'
        assert text == result, f'Error. Expected {text}, but could not find that text'

    def test_close_button_is_rendered_as_an_action(self):
        expected_id = "close-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_clicking_the_close_button_closes_the_email_card(self):
        close_button = self.driver.find_element_by_id("close-button")
        self.driver.execute_script("arguments[0].click();", close_button)
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def test_email_input_is_rendered(self):
        expected_id = "email-input"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_subject_input_is_rendered(self):
        expected_id = "subject-input"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_subject_input_displays_subject(self):
        expected_id = "subject-input"
        result = self.driver.find_element_by_id(
            expected_id).get_attribute('placeholder')
        expected_text = 'Subject'
        assert result == expected_text, f'Error. Expected {expected_text}, but could not find that text'

    def test_text_area_is_rendered(self):
        expected_id = "email-body"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_send_button_rendered(self):
        expected_id = "send-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_attachment_button_rendered(self):
        expected_id = "attachment-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_delete_button_rendered(self):
        expected_id = "delete-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_clicking_delete_button_closes_email(self):
        self.driver.find_element_by_id('delete-button').click()
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def teardown_method(self):
        self.driver.quit()
