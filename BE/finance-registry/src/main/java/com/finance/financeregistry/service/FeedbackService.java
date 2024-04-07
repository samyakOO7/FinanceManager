package com.finance.financeregistry.service;

import com.techtitans.feedbackregistry.dto.RatingCount;
import com.techtitans.feedbackregistry.entity.Feedback;
import com.techtitans.feedbackregistry.repository.FeedbackRepository;
import com.techtitans.feedbackregistry.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class FinanceService {

    @Autowired
    private FinanceRepository financeRepository;


}
