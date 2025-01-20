const e=`---
title: "Fetching weather data from NOAA"
image: "./src/assets/images/NOAA.svg"
date: "01-19-2025"
description: "Using Open Weather API to get historic summaries from NOAA with R."
---


## Overview

&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; The National Oceanic and Atmospheric Administration (NOAA) is vital in monitoring climate change and helping communities adapt to emerging climate risks. Offering everything from daily weather forecasts and severe storm warnings to free climate monitoring, it is an invaluable resource for researchers, policymakers and the general public. However, navigating NOAA’s website to access these data sets can be challenging. During a recent project, I found myself frustrated by the complex menus and the countless unsuccessful attempts at accessing the data I required. To overcome this challenge, I turned to Open Weather API as an alternative, which saved me time and streamlined my code. In this article, I wish to provide a solution that might resolve the issue others are facing with an example. 

## Access your API key and your target station

&nbsp;  For the API key:

1. Sign up for a free open weather account. 
2. Click on your username. 
3. Copy and save your generated API key. 

&nbsp; For the station:

1. Go to NOAA's home page. 
2. Click Climate Data Online and enter a search term. 
3. Select the station that best reflects the location you are looking for. 

## GET the data you need

Begin by loading the required packages into the R environment 

\`\`\`r
install.packages("httr")
install.packages("jsonlite")
install.packages("dplyr")
install.packages("lubridate")
\`\`\`
Define a function that retrieves temperature data from NOAA's API. Taking in 4 parameters: station ID, start date, end date, and API token.
Set up the API endpoint and query parameters for the NOAA request.

\`\`\` r
get_noaa_temp <- function(station_id, start_date, end_date, token){
    base_url <- "https://www.ncdc.noaa.gov/cdo-web/api/v2/data"
  query <- list(
    datasetid = "GHCND",
    stationid = station_id,
    startdate = start_date,
    enddate = end_date,
    limit = 1000,
    datatypeid = "TMAX,TMIN"
  )
\`\`\`

Make the HTTP GET request to the NOAA API with the specified parameters and authentication token.

\`\`\` r
response <- GET(
    url = base_url,
    query = query,
    add_headers(token = token)
  )

\`\`\`

Check if the API request was successful (status code 200). If not, displays error message and stops execution.

\`\`\` r
if (status_code(response) != 200) {
    message("API Response: ", rawToChar(response$content))
    stop("API request failed with status code: ", status_code(response))
  }

\`\`\`
Converts the API response from JSON to R data structure.
\`\`\` r
data <- fromJSON(rawToChar(response$content))$results
\`\`\`
If data exists, processes it by:
- Converting temperature values (dividing by 10 for correct units)
- Reshaping data to wide format (separate columns for TMAX and TMIN)
- Converting dates to Date format
- Calculating average temperature

\`\`\` r
if (!is.null(data) && nrow(data) > 0) {
    temp_data <- data %>%
      mutate(value = value/10) %>%
      tidyr::pivot_wider(
        id_cols = date,
        names_from = datatype,
        values_from = value
      ) %>%
      mutate(
        date = as.Date(date),
        avg_temp = (TMAX + TMIN) / 2
      )
\`\`\`

Define a function to handle multi-year temperature data retrieval

\`\`\` r
get_multi_year_temps <- function(station_id, start_date, end_date, token) {
\`\`\`

Create a sequence of dates by year and ensures the end date is included.

\`\`\`r
dates <- seq(start_date, end_date, by = "year")
  if (tail(dates, 1) != end_date) {
    dates <- c(dates, end_date)
  }
\`\`\`

Loop through date ranges, adding a 1-second delay between requests to avoid API rate limits.

\`\`\`r 
for (i in 1:(length(dates)-1)) {
    current_start <- dates[i]
    current_end <- dates[i+1]
    if (i > 1) Sys.sleep(1)
\`\`\`

Set up the specific parameters for data retrieval (API token, station ID, date range).

\`\`\`r 
token <- "YOUR TOKEN HERE"
station_id <- "GHCND: A SET OF CHARACTERS AND NUMBERS"
start_date <- "YEAR-MONTH-DAY"
end_date <- "YEAR-MONTH-DAY"
\`\`\`

Retrieve all temperature data for the specified period.
If data was retrieved successfully, saves it to a CSV file and prints summary information about the collected data.

\`\`\` r
if (!is.null(all_temperature_data)) {
  write.csv(all_temperature_data, "Temperature_data.csv", row.names = FALSE)
\`\`\`

Official documentation: https://openweathermap.org/api#maps

## Full code:

\`\`\`r 
library(httr)
library(jsonlite)
library(dplyr)
library(lubridate)

get_noaa_temp <- function(station_id, start_date, end_date, token) {
  base_url <- "https://www.ncdc.noaa.gov/cdo-web/api/v2/data"
  
  query <- list(
    datasetid = "GHCND",
    stationid = station_id,
    startdate = start_date,
    enddate = end_date,
    limit = 1000,
    datatypeid = "TMAX,TMIN"
  )
  response <- GET(
    url = base_url,
    query = query,
    add_headers(token = token)
  )
  if (status_code(response) != 200) {
    message("API Response: ", rawToChar(response$content))
    stop("API request failed with status code: ", status_code(response))
  }
  data <- fromJSON(rawToChar(response$content))$results

  if (!is.null(data) && nrow(data) > 0) {

    temp_data <- data %>%

      mutate(value = value/10) %>%
      tidyr::pivot_wider(
        id_cols = date,
        names_from = datatype,
        values_from = value
      ) %>%
      mutate(
        date = as.Date(date),
        avg_temp = (TMAX + TMIN) / 2
      )
    
    return(temp_data)
  } else {
    warning("No data found for the specified parameters")
    return(NULL)
  }
}

get_multi_year_temps <- function(station_id, start_date, end_date, token) {
  start_date <- as.Date(start_date)
  end_date <- as.Date(end_date)
  dates <- seq(start_date, end_date, by = "year")
  if (tail(dates, 1) != end_date) {
    dates <- c(dates, end_date)
  }
  all_temps <- list()
  
  for (i in 1:(length(dates)-1)) {
    current_start <- dates[i]
    current_end <- dates[i+1]
    if (i > 1) Sys.sleep(1)
    
    message("Fetching data from ", current_start, " to ", current_end)
    
    temp_data <- tryCatch({
      get_noaa_temp(station_id, current_start, current_end, token)
    }, error = function(e) {
      message("Error for period ", current_start, " to ", current_end, ": ", e$message)
      return(NULL)
    })
    
    if (!is.null(temp_data)) {
      all_temps[[i]] <- temp_data
    }
  }
  
  combined_temps <- bind_rows(all_temps)
  final_temps <- combined_temps %>%
    arrange(date) %>%
    distinct(date, .keep_all = TRUE)
  return(final_temps)
}

token <- "YOUR TOKEN HERE"
station_id <- "GHCND: A SET OF CHARACTERS AND NUMBERS"
start_date <- "YEAR-MONTH-DAY"
end_date <- "YEAR-MONTH-DAY"

all_temperature_data <- get_multi_year_temps(station_id, start_date, end_date, token)

if (!is.null(all_temperature_data)) {
  write.csv(all_temperature_data, "Temperature_data.csv", row.names = FALSE)
  
  print(paste("Data points collected:", nrow(all_temperature_data)))
  print(paste("Date range:", min(all_temperature_data$date), "to", max(all_temperature_data$date)))
  print(head(all_temperature_data %>% select(date, avg_temp)))
}
\`\`\`

`;export{e as default};
