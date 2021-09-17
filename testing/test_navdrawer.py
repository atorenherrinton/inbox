from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


class TestNavDrawer:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(5)
        self.driver.get('http://localhost:3000/')

    def test_nav_drawer_renders_lower_than_nav_bar(self):
        class_1 = 'MuiAppBar-root'
        class_2 = 'MuiDrawer-paper'
        z_index_1 = self.driver.find_element_by_class_name(
            class_1).value_of_css_property("z-index")
        z_index_2 = self.driver.find_element_by_class_name(
            class_2).value_of_css_property("z-index")
        assert z_index_1 > z_index_2, f'Error. Expected the z-index of {class_1} is {z_index_1} and {class_2} is {z_index_2}'

    def test_nav_drawer_closes_when_menu_button_is_clicked(self):
        self.driver.find_element(By.ID, 'menu-button').click()
        time.sleep(0.15)
        expected_class = 'MuiDrawer-paper'
        result = self.driver.find_element_by_class_name(expected_class)
        assert result.value_of_css_property("visibility") == "hidden", f'Error. Expected {expected_class} to be hidden, but it was still there'

    def test_nav_drawer_opens_back_up_when_menu_button_is_clicked_twice(self):
        self.driver.find_element(By.ID, 'menu-button').click()
        self.driver.find_element(By.ID, 'menu-button').click()
        time.sleep(0.15)
        expected_class = 'MuiDrawer-paper'
        result = self.driver.find_element_by_class_name(expected_class)
        assert result.value_of_css_property("visibility") == "visible", f'Error. Expected {expected_class} to be visible, but it was still there'

    def teardown_method(self):
        self.driver.quit()

