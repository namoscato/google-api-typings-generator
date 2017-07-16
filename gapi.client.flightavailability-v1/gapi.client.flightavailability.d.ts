// Type definitions for Google Google Flight Availability API v1
// Project: https://devsite.googleplex.com/flightavailability
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.flightavailability {
    
    interface FlightavailabilityPartnerAvailQuestionsSegment {
        // Departure date for this segment, in the time zone of the origin airport.
        departureDate?: FlightavailabilityDate,
        // Booking code, one or two letters.
        bookingCode?: string,
        // Three-letter code of the origin airport.
        origin?: string,
        // A positive number from 1 to 9999.
        flightNumber?: number,
        // Three-letter code of the destination airport.
        destination?: string,
        // Exactly 2 alphanumeric characters.
        carrier?: string,
        // If true, then don't include an availability answer for this segment.
        // The default is <code>false</code> (=include information).
        // Useful for multiple segments with married availability, when it would
        // only be desirable to expose availability from a few selected segments.
        // <p><aside class="note"><b>Note:</b> <i>Married availability</i> refers to
        // flight segments that are sold together based on origin and destination,
        // but might not be available if you try to book them separately, segment by
        // segment. For example, a routing from New York via Paris to Cairo might be
        // available when you book a New York-Cairo flight, but an airline might
        // restrict booking the two segments (New York to Paris, and Paris to Cairo)
        // separately.</aside><p>
        passiveSegment?: boolean,
    }
    
    interface FlightavailabilityPartnerAvailAnswersEquivalentBookingCodes {
        // Booking code, one or two letters.
        bookingCodes?: string[],        
    }
    
    interface FlightavailabilityPartnerAvailAnswersConstraint {
        // Zero-based non-negative index into the list of segments in the original
        // question.
        segmentIndices?: number[],        
    }
    
    interface FlightavailabilityPartnerAvailAnswers {
        // One-to-one mapping of answers to questions.
        answers?: FlightavailabilityPartnerAvailAnswersAnswer[],        
        // Consists of the sequence of calculations done to produce the questions.
        narrative?: string,
    }
    
    interface FlightavailabilityPartnerAvailAnswersConstraintWithEquivalence {
        // Multiple groups if booking codes are to be treated as equivalent.
        equivalentBookingCodes?: FlightavailabilityPartnerAvailAnswersEquivalentBookingCodes[],        
        // Zero-based non-negative index into the list of segments in the original
        // question.
        segmentIndices?: number[],        
    }
    
    interface FlightavailabilityPartnerAvailQuestions {
        // Parameters that apply to all questions.
        parameters?: FlightavailabilityPartnerAvailQuestionsParameters,
        // Availability questions.
        questions?: FlightavailabilityPartnerAvailQuestionsQuestion[],        
    }
    
    interface FlightavailabilityPartnerAvailAnswersSeatCountSeatsFlag {
        // Available on request.
        onRequest?: boolean,
        // Wait list closed.
        waitlistClosed?: boolean,
        // Non-operating.
        nonOperating?: boolean,
        // More seats may be available.
        infinityFlag?: boolean,
        // Wait list open.
        waitlistOpen?: boolean,
    }
    
    interface FlightavailabilityPartnerAvailAnswersAnswer {
        // The answer. It consists of multiple solutions.
        solutions?: FlightavailabilityPartnerAvailAnswersSolution[],        
        // Consists of the sequence of calculations done to produce the answer.
        narrative?: string,
        // Set to true if no solution is found for the corresponding question.
        // <p><aside class="note"><b>Note:</b> We return no solution if AVS returns
        // an empty solution or reports an error for that question.<aside></p>
        foundNoSolution?: boolean,
    }
    
    interface FlightavailabilityPartnerAvailQuestionsPointOfSale {
        // Exactly 2 or 3 alphanumeric characters.
        // CRS stands for Computer Reservation System.
        salesCrss?: string[],        
        // Exactly 2 or 3 alphanumeric characters.
        salesCarriers?: string[],        
        // 3 to 5 letters.
        salesAirport?: string,
        // 2 to 3 letters.
        // Defaults to 'US'.
        salesCountry?: string,
        // 3 to 5 letters.
        salesCity?: string,
    }
    
    interface FlightavailabilityPartnerAvailAnswersSolution {
        // Consists of the sequence of calculations done to produce the solution.
        narrative?: string,
        // All constraints that apply to a solution.
        constraints?: FlightavailabilityPartnerAvailAnswersConstraints,
        // A list of seat counts for one or more segments.
        segmentCounts?: FlightavailabilityPartnerAvailAnswersSegmentCounts[],        
        // UTC timestamp that indicates when the solution was computed.
        timestampTime?: string,
    }
    
    interface FlightavailabilityDate {
        // Day of month. Must be from 1 to 31 and valid for the year and month, or 0
        // if specifying a year/month where the day is not significant.
        day?: number,
        // Year of date. Must be from 1 to 9999, or 0 if specifying a date without
        // a year.
        year?: number,
        // Month of year. Must be from 1 to 12.
        month?: number,
    }
    
    interface FlightavailabilityPartnerAvailAnswersConstraints {
        // Counts that are valid only when booking in the same BCs.
        sameBookingCodes?: FlightavailabilityPartnerAvailAnswersConstraintWithEquivalence[],        
        // Counts that are valid only when booking in different BCs.
        diffBookingCodes?: FlightavailabilityPartnerAvailAnswersConstraintWithEquivalence[],        
        // Segments that must be married.
        marriedSegments?: FlightavailabilityPartnerAvailAnswersConstraint[],        
    }
    
    interface FlightavailabilityPartnerAvailAnswersSegmentCounts {
        // A list of seat counts for a segment.
        seatCounts?: FlightavailabilityPartnerAvailAnswersSeatCount[],        
        // Consists of the sequence of calculations done to produce the segment.
        narrative?: string,
        // Segment index in the original question.
        segmentIndex?: number,
    }
    
    interface FlightavailabilityPartnerAvailQuestionsParameters {
        // Whether a PAORES-adjusted answer has been requested.
        seamlessAdjustment?: boolean,
        // Indicates that answer should follow carrier preferred rules.
        carrierPreferredAnswer?: boolean,
        // List of segments provided as journey data.
        journeyDataSegments?: FlightavailabilityPartnerAvailQuestionsSegment[],        
        // Location where tickets are purchased.
        pointOfSale?: FlightavailabilityPartnerAvailQuestionsPointOfSale,
    }
    
    interface FlightavailabilityPartnerAvailQuestionsQuestion {
        // Three-letter abbreviation for the city where the journey originates.
        journeyOriginCity?: string,
        // List of segments to be queried for availability.
        // <p><aside class="note"><b>Note:</b> No more than 10 segments per question
        // is allowed.</aside></p>
        segments?: FlightavailabilityPartnerAvailQuestionsSegment[],        
    }
    
    interface FlightavailabilityPartnerAvailAnswersSeatCount {
        // Seats flag.
        seatsFlag?: FlightavailabilityPartnerAvailAnswersSeatCountSeatsFlag,
        // Available seat counts.
        count?: number,
        // Booking code, one or two letters.
        bookingCode?: string,
    }
    
    interface V1Resource {
        // Called by a partner: receives questions, each of which consists of one or
        // more segments, and returns answers with availability data.
        query (request: {        
        }) : gapi.client.Request<FlightavailabilityPartnerAvailAnswers>;        
        
    }
    
}

declare module gapi.client.flightavailability {
    var v1: gapi.client.flightavailability.V1Resource; 
    
}
