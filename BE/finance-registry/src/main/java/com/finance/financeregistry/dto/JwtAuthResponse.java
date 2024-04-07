package com.finance.financeregistry.dto;

import com.finance.financeregistry.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthResponse {
    String token;
    Long id;
    String organisationName;
    String email;

    public JwtAuthResponse(String token, User user) {
        this.token = token;
        this.id = user.getId();
        this.organisationName = user.getOrganisationName();
        this.email = user.getEmail();
    }
}
